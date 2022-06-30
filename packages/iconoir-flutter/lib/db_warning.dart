import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DbWarning extends StatelessWidget {
  const DbWarning({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DbWarning.svg');
}
