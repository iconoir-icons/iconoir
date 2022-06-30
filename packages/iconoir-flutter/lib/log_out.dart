import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LogOut extends StatelessWidget {
  const LogOut({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/LogOut.svg');
}
