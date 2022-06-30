import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NoSmokingCircled extends StatelessWidget {
  const NoSmokingCircled({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NoSmokingCircled.svg');
}
