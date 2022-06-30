import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DbStar extends StatelessWidget {
  const DbStar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DbStar.svg');
}
