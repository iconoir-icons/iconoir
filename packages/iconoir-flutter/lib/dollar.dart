import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Dollar extends StatelessWidget {
  const Dollar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Dollar.svg');
}
