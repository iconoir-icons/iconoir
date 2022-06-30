import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DbError extends StatelessWidget {
  const DbError({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DbError.svg');
}
