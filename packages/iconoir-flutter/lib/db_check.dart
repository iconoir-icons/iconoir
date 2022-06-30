import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DbCheck extends StatelessWidget {
  const DbCheck({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DbCheck.svg');
}
